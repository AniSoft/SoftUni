money_wanted = float(input())
number_fen = int(input())
number_horror = int(input())
number_romance = int(input())

price_fen = 14.90
price_horror = 9.80
price_romance = 4.30

sum_sell = number_fen * price_fen + number_horror * price_horror + number_romance * price_romance
vat = sum_sell * 0.20

sum_after_vat = sum_sell - vat

if sum_after_vat >= money_wanted:
    sum_over = sum_after_vat - money_wanted
    sell_man = round(sum_over * 0.1)
    extra_money = sum_over - sell_man

    final_money = money_wanted + extra_money

    print(f'{final_money:.2f} leva donated.')
    print(f'Sellers will receive {sell_man} leva.')
else:
    need_money = money_wanted - sum_after_vat
    print(f'{need_money:.2f} money needed.')
