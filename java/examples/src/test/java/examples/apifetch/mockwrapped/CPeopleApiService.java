package examples.apifetch.mockwrapped;

import examples.apifetch.PeopleClient;
import examples.apifetch.Result;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class CPeopleApiService {
    private final PeopleClient peopleClient;

    public CPeopleApiService(PeopleClient peopleClient) {
        this.peopleClient = peopleClient;
    }

    public List<String> peopleWithEyeColor(String eyeColor) {
        try {

            var bean = peopleClient.fetchPeople();
            return bean
                    .stream()
                    .filter(result -> eyeColor.equalsIgnoreCase(result.eye_color()))
                    .map(Result::name)
                    .collect(Collectors.toList());

        } catch (IOException | InterruptedException e) {
            return Collections.emptyList();
        }
    }
}
