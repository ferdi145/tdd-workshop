package examples.apifetch;

import java.util.ArrayList;

public record Root(
        int count,
        String next,
        Object previous,
        ArrayList<Result> results
) {
}

