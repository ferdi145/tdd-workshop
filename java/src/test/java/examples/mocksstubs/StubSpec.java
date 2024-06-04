package examples.mocksstubs;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.when;


class StubSpec {

    @Test
    void stub() {
        Person person = spy(new Person());
//        doReturn("blub").when(person).name(); <-- not type checked!
        when(person.name()).thenReturn(new Name("Jane", "Jones"));

        String value = person.fullName();

        assertThat(value)
                .isEqualTo("Jane Jones");
    }
}

