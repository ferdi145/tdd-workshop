package examples.apifetch.directlyfromapi;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;


class FetchFromApi {

    @Test
    void fetchFromApi() {
        APeopleApiService peopleApiService = new APeopleApiService();

        var result = peopleApiService.peopleWithEyeColor("blue");

        Assertions.assertThat(result)
                .containsExactly(
                        "Luke Skywalker",
                        "Owen Lars",
                        "Beru Whitesun lars"
                );
    }
}
