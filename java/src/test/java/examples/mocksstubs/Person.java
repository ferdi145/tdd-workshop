package examples.mocksstubs;

public class Person {
    public Person() {
    }

    public Name name() {
        return new Name("Hans", "Dampf");
    }

    public String fullName() {
        Name name = this.name();
        return new StringBuilder()
                .append(name.firstname())
                .append(" ")
                .append(name.lastname())
                .toString();
    }
}
