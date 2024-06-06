package examples.mocksstubs;

import java.util.ArrayList;
import java.util.Objects;

public class Name {
    private final String firstname;
    private final String lastname;
    private final ArrayList<String> firstnames = new ArrayList<>();

    public Name(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        firstnames.add(firstname);
    }

    public String firstname() {
        return firstname;
    }

    public String lastname() {
        return lastname;
    }

    public ArrayList<String> firstnames() {
        return firstnames;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null || obj.getClass() != this.getClass()) return false;
        var that = (Name) obj;
        return Objects.equals(this.firstname, that.firstname) &&
                Objects.equals(this.lastname, that.lastname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstname, lastname);
    }

    @Override
    public String toString() {
        return "Name[" +
                "firstname=" + firstname + ", " +
                "lastname=" + lastname + ']';
    }

}
