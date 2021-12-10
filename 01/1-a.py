file = open("input")

readings = list(map(lambda _: int(_), file.read().split("\n")))

previous = readings[0]
count = 0

for reading in readings:
    if reading > previous: count += 1
    previous = reading

print(count)
