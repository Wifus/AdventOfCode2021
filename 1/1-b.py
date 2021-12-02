file = open("./input")

readings = list(map(lambda _: int(_), file.read().split("\n")))

previous = readings[0] + readings[1] + readings[2]
count = 0

for i in range(1, len(readings) - 2):
    reading = readings[i] + readings[i + 1] + readings[i + 2]
    if reading > previous: count += 1
    previous = reading

print(count)
