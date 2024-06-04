package examples.apifetch.mockwrapped;

import examples.apifetch.PeopleClient;
import examples.apifetch.Result;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


class FetchFromWrappedMock {

    // cleaner separation, more control over return type, and we own the stuff we replace with a test double.
    @Test
    void fetchFromWrapper() throws IOException, InterruptedException {
        var peopleClient = mock(PeopleClient.class);
        when(peopleClient.fetchPeople())
                .thenReturn(List.of(
                        createResult("Luke Skywalker", "blue"),
                        createResult("Nick Nonblueeyes", "red")
                ));
        var peopleApiService = new CPeopleApiService(peopleClient);

        var result = peopleApiService.peopleWithEyeColor("blue");

        Assertions.assertThat(result)
                .containsExactly("Luke Skywalker");
    }

    @Test
    void fetchFromWrapperWithOwnFake() throws IOException, InterruptedException {
        List<Result> givenPeople = List.of(
                createResult("Luke Skywalker", "blue"),
                createResult("Nick Nonblueeyes", "red")
        );
        FakePeopleClient peopleClient = new FakePeopleClient(givenPeople);
        var peopleApiService = new CPeopleApiService(peopleClient);

        var result = peopleApiService.peopleWithEyeColor("blue");

        Assertions.assertThat(result)
                .containsExactly("Luke Skywalker");
    }

    private static Result createResult(String name, String eyeColor) {
        return new Result(
                name,
                "202",
                "136",
                "none",
                "white",
                eyeColor,
                "41.9BBY",
                "male",
                "https://swapi.dev/api/planets/1/",
                List.of(
                        "https://swapi.dev/api/films/1/",
                        "https://swapi.dev/api/films/2/",
                        "https://swapi.dev/api/films/3/",
                        "https://swapi.dev/api/films/6/"
                ),
                List.of(),
                List.of(),
                List.of(),
                new Date(),
                new Date(),
                "https://swapi.dev/api/people/4/"
        );
    }
}
