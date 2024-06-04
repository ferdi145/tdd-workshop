package examples.apifetch;

import java.io.IOException;
import java.util.List;

public interface PeopleClient {
    List<Result> fetchPeople() throws IOException, InterruptedException;
}
