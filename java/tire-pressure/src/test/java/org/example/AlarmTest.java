package org.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class AlarmTest {

    @Test
    public void alarmIsOffByDefault() {
        Alarm alarm = new Alarm();
        Assertions.assertFalse(alarm.isAlarmOn());
    }

}
