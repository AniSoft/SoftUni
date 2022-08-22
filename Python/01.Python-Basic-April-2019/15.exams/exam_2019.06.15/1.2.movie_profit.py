name = input()
days = int(input())
tickets = int(input())
ticket_price = float(input())
procent = int(input())

all_tickets = tickets * ticket_price
money = all_tickets * days

cinema_procent = money * procent / 100

total = money - cinema_procent

print(f'The profit from the movie {name} is {total:.2f} lv.')
