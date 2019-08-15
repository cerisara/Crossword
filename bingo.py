import string
import random

def init():
    with open("mots.txt") as f: mots = f.readlines()
    with open("defs.txt") as f: defs = f.readlines()
    assert len(mots)==len(defs)
    print("ndefs "+str(len(mots)))

    voc=set()
    with open("estrepu.txt") as f:
        for l in f:
            l = l.replace("'"," ")
            l = l.translate(str.maketrans('', '', string.punctuation))
            tmots = l.lower().strip().split()
            for m in tmots: voc.add(m)
    print("estrepu "+str(len(voc)))

    gm,gd=[],[]
    for i in range(len(mots)):
        m = mots[i].strip().lower()
        if len(m)>0 and m in voc:
            d = defs[i].strip()
            if len(d)>0:
                gm.append(m)
                gd.append(d)
    print("mots restants "+str(len(gm)))

    with open("goodmots.txt","w") as f:
        for m in gm: f.write(m+'\n')
    with open("gooddefs.txt","w") as f:
        for m in gd: f.write(m+'\n')

def play():
    with open("goodmots.txt","r") as f: lines=f.readlines()
    mots = [s.strip() for s in lines]
    with open("gooddefs.txt","r") as f: lines=f.readlines()
    defs = [s.strip() for s in lines]
    while True:
        j=random.randint(0,len(mots))
        print(defs[j])
        s=input('answer ?')
        print(mots[j])

# init()
play()

