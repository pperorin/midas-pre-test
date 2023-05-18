function getClockAngle(hh_mm) {
    const [hour, minute] = hh_mm.split(':');
    const hourAngle = (hour % 12) * 30 + minute / 2;
    const minuteAngle = minute * 6;
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}
