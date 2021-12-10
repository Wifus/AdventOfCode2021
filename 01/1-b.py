file = open("./input")

readings = list(map(lambda _: int(_), file.read().split("\n")))

previous = sum(readings[0:3])
count = 0

for i in range(1, len(readings) - 2):
    reading = readings[i] + readings[i + 1] + readings[i + 2]
    if reading > previous: count += 1
    previous = reading

print(count)
