package examples.apifetch.mockwrapped;

import examples.apifetch.PeopleClient;
import examples.apifetch.Result;

import java.io.IOException;
import java.util.List;

public class FakePeopleClient implements PeopleClient {


    private final List<Result> givenPeople;

    public FakePeopleClient(List<Result> givenPeople) {
        this.givenPeople = givenPeople;
    }

    @Override
    public List<Result> fetchPeople() throws IOException, InterruptedException {
        return givenPeople;
    }
}
