income = float(input())
months = int(input())
personal_expenses = float(input())

unexpected = income * 0.3
rest_every_month=income-personal_expenses-unexpected
total_save_money=rest_every_month*months
save_money_percentage=(rest_every_month/income)*100

print(f'She can save {save_money_percentage:.2f}%')
print(f'{total_save_money:.2f}')