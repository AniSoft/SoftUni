smallest = 10000000000000
biggest = -10000000000000
n = int(input())

for i in range(0, n):
    num = int(input())
    if num < smallest:
        smallest = num
    if num > biggest:
        biggest = num

print("Max number: " + str(biggest))
print("Min number: " + str(smallest))