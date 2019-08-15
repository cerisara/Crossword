with open("mots.txt") as f: mots = f.readlines()
with open("defs.txt") as f: defs = f.readlines()
assert len(mots)==len(defs)

import random

for i in range(10):
    j=random.randint(0,len(mots))
    print(defs[j])
    s=input('answer ?')
    print(mots[j])

