import bz2

wik = "/home/xtof/Downloads/frwiktionary-20190801-pages-articles.xml.bz2"

inw=0
wikf = bz2.open(wik,"r")
while True:
    l=wikf.readline()
    if l.startswith(b"=== ") and b"|fr}}" in l:
        inw=1
    elif inw==1 and l.startswith(b"'''"):
        inw=2
        i=l.find(b"'''",3)
        if i>3:
            mot = l[3:i].decode('utf8')
            if not mot[0].isalpha(): inw=0
        else: inw=0 
    elif inw==2 and l.startswith(b"# "):
        defi = l[2:]
        while True:
            j=defi.find(b'[[')
            if j<0: break
            k=defi.find(b'|',j)
            l=defi.find(b']]',j)
            if l>=0:
                if k>=0 and k<l:
                    defi=defi[0:j]+defi[j+2:k]+defi[l+2:]
                else:
                    defi=defi[0:j]+defi[j+2:l]+defi[l+2:]
        while True:
            j=defi.find(b'{{')
            if j<0: break
            k=defi.find(b'|',j)
            l=defi.find(b'}}',j)
            if l>=0:
                if k>=0 and k<l:
                    defi=defi[0:j]+defi[j+2:k]+defi[l+2:]
                else:
                    defi=defi[0:j]+defi[j+2:l]+defi[l+2:]

        defi = defi.decode('utf8')
        inw=0
        print(mot,defi)

wikf.close()
