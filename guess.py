import random

guessesTaken = 0
number = random.randint(1, 20)

print('Hello, I am thinking of a number between 1 and 20.')

while guessesTaken < 6:
	print('Take a guess.')
	guess = input()
	guess = int(guess)
	guessesTaken = guessesTaken + 1

	if guess < number:
		print('Your guess is too low.')

	if guess > number:
		print('Your guess is too high.')

	if guess == number:
		number = str(number)
		guessesTaken = str(guessesTaken)
		print('You are a genius! You guessed my number in ' + guessesTaken + ' guesses!')

#print('Nope. The number I was thinking of was ' + number)
