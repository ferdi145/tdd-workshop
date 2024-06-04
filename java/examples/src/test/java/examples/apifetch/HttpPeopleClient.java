package examples.apifetch;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.List;

import static examples.apifetch.API.BASE_URL;

public class HttpPeopleClient implements PeopleClient {
    private final HttpClient client;

    public HttpPeopleClient(HttpClient client) {
        this.client = client;
    }

    @Override
    public List<Result> fetchPeople() throws IOException, InterruptedException {
        HttpRequest request = HttpRequest
                .newBuilder()
                .uri(URI.create(BASE_URL + "/people/"))
                .GET()
                .header("Accept", "application/json")
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String responseJson = response.body().toString();
        return new ObjectMapper().readValue(responseJson, Root.class).results();
    }
}
