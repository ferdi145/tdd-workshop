package examples.mocksstubs;

public class Person {

    private Name name;

    public Person() {
        name = new Name("Hans", "Dampf");
    }

    public Person(Name name) {
        this.name = name;
    }

    public Name name() {
        return name;
    }

    public String fullName() {
        Name name = this.name();
        return new StringBuilder()
//                .append(name.firstname())
                // unsafe, just an example
                .append(name.firstnames().stream().findFirst().get())
                .append(" ")
                .append(name.lastname())
                .toString();
    }
}
