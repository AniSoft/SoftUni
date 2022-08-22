rent_hall = int(input())

prize = rent_hall - rent_hall * 0.30
food = prize - prize * 0.15
sound = food * 0.5

total = rent_hall + prize + food + sound
print(f'{total:.2f}')