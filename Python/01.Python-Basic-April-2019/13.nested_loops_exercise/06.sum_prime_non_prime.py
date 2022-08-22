number = input()

prime_sum = 0
non_prime_sum = 0
while number != 'stop':
    number = int(number)
    counter = 0
    if number < 0:
        print(f'Number is negative.')
    else:
        for i in range(2, number + 1):
            if number % i == 0:
                counter += 1

        if counter == 1:
            prime_sum += number
        else:
            non_prime_sum += number

    number = input()

print(f'Sum of all prime numbers is: {prime_sum}')
print(f'Sum of all non prime numbers is: {non_prime_sum}')