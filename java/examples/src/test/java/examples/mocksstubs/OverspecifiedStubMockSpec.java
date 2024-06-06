package examples.mocksstubs;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;


class OverspecifiedStubMockSpec {

    @Test
    void stub() {
        Name name = spy(new Name("Jane", "Jones"));
        Person person = new Person(name);

        String value = person.fullName();

        verify(name, times(1)).firstname();
        verify(name, times(1)).lastname();
        assertThat(value)
                .isEqualTo("Jane Jones");
    }
}

