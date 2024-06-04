package examples.mocksstubs;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;


class MockSpec {

    @Test
    void mockDirectCall() {
        Printer printer = mock(Printer.class);
        Greeter greeter = new Greeter(printer);

        greeter.greet("Alice");

        verify(printer, times(1)).print("Hello Alice");
    }
}

class Greeter {
    private final Printer printer;

    public Greeter(Printer printer) {
        this.printer = printer;
    }

    public void greet(String value) {
        printer.print("Hello " + value);
    }
}

class Printer {
    public Printer() {
    }

    void print(String value) {
        System.out.println(value);
    }
}
