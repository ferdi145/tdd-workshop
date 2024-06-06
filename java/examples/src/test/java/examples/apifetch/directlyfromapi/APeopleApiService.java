package examples.apifetch.directlyfromapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import examples.apifetch.Result;
import examples.apifetch.Root;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static examples.apifetch.API.BASE_URL;

public class APeopleApiService {
    private final HttpClient client;

    public APeopleApiService() {
        this.client = HttpClient.newHttpClient();
    }

    public List<String> peopleWithEyeColor(String eyeColor) {
        try {
            HttpRequest request = HttpRequest
                    .newBuilder()
                    .uri(URI.create(BASE_URL + "/people/"))
                    .GET()
                    .header("Accept", "application/json")
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            String responseJson = response.body();
            System.out.println("Response from Server: " + responseJson);
            var bean = new ObjectMapper().readValue(responseJson, Root.class);
            return bean.results()
                    .stream()
                    .filter(result -> eyeColor.equalsIgnoreCase(result.eye_color()))
                    .map(Result::name)
                    .collect(Collectors.toList());

        } catch (IOException | InterruptedException e) {
            return Collections.emptyList();
        }
    }
}
