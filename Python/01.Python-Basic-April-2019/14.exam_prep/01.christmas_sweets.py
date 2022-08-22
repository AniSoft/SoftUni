price_baklava = float(input())
price_mufin = float(input())

kg_shtolen = float(input())
kg_bonboni = float(input())
kg_biskviti = float(input())

price_shtolen = price_baklava + price_baklava * 0.60
price_bonboni = price_mufin + price_mufin * 0.80

suma_shtolen = kg_shtolen * price_shtolen
suma_bonboni = kg_bonboni * price_bonboni
suma_biskvite = kg_biskviti * 7.50

total = suma_biskvite + suma_bonboni + suma_shtolen

print(f'{total:.2f}')