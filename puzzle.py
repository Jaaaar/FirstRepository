{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import random\
\
words = ["apple", "banana", "orange", "pear", "grape", "kiwi", "pineapple"]\
\
# randomly select a word from the list\
word = random.choice(words)\
\
# scramble the letters in the word\
scrambled = list(word)\
random.shuffle(scrambled)\
scrambled = ''.join(scrambled)\
\
# print the scrambled word for the user to guess\
print("Guess the word: " + scrambled)\
\
# get the user's guess\
guess = input("Enter your guess: ")\
\
# check if the guess is correct\
if guess == word:\
    print("Congratulations, you guessed the word!")\
else:\
    print("Sorry, that's not the word.")\
}