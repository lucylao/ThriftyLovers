import React from 'react'
import {Link} from 'react-router-dom'


class Messages extends React.Component {
render(){
    return(
        <div>
            <h1>Chat With Your Thrifter Here!</h1>
            <table className="table">
                <tr>
                    <th>Matches</th>
                    <th>Event</th> 
                    <th>Messages</th>
                </tr>
                <tr>
                    <td>Alex
                        <br/>
                        <img className="users" src="https://www.rover.com/blog/wp-content/uploads/2015/07/pug-sunglasses.jpg" />
                    </td>
                    <td>Walking in the Park</td>
                    <td>Hi
                        <br/>
                        <textarea className="messagebox">
                        </textarea>
                        <br/>
                    <button>Send</button>
                    </td>
                </tr>
                <tr>
                    <td>Eve
                        <br/>
                        <img className="users" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxUVGBgYGBcYGBcaFxUWFxUXFRcYHSggGBolHRUXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0rLS0tLS0tKy0tLSstLS0tLS0tLS0rLS0rLSstLSstLS0tKy0tNy0tLS0tLS0rKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABFEAABAwIDBAYIBAMFCAMAAAABAAIRAwQFITESQVFhBiJxgZGxBxMUMqHB0fBCUmLhI3LxFYKSorIkM0NjwtLi8hY0VP/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EAB8RAAIDAQEBAAMBAAAAAAAAAAABAgMRIRIxBBMiQf/aAAwDAQACEQMRAD8AOkqMlblROKuZJp4SoyVs4qMlCFp64rUryV4uNMKe+jEmi0DaAG8iB3ZpEYcwul4M8mgzq7OWQ08lJ+S/5wdUuntdzWjeUAvqoJyBRu6dOUKG3tWgy4d4PyXn/wCli4iPCLMNElufYjLK8arem9pGR++xV7moRzR/AG/RHcVwh9StByKyvUCoVKyzA1wuvfOalpV96E+1QtBcxOaxoKLDZugp23CWm3OalqX/ADSl9CaDr70AqN+LDdmll18SvKVwJXSMSTGduJPdoAApLioSMiJ4EZILTv28FPRxKmTByS3pvlIpYxVBaWlnx17OBXNMYunUndR0DnmV1e7t2VGkSDwIOf0KQukuCh0jIncRqmVs1iwzpK9xDHQ4aGRr9E0YZU0hJdrh5ZU2XsOvH4pysaZiQDkmySBGeiC+m5gOZaQOGn9EgVMjCccPu3NO4dp1SniZmo7KMzlw71R+Ms0RaVtpYtJXqqEDs4qN69JUT3KojPCVE9y2cVE5YxiPdpeSoyVkrDS/hdNrqjdsw0ZldCoXQdTBpghsQMo0yXL2HNdEw559nZmCYGmQHYpL46PqeG1W52TopKF7Ovkhdem9x1U9uws1IU3gf6C4qs/ooby5ZGqEXmIRvSvj3SD1dNzicgCef3KHOhB26v2g5FUqt3OhXK6nTGo9/WbDSe0gJqw+8L2CHTwP1ReMM9DC65K8NxOiDtrumN6JW9OM3IJINMlt6hlaXNfNWmsgczmg2IVdYS1EJsnNdS0qqGMq5Zrxl4CcljicmGvWEqWltlD6FyrrLril4MCFBmyM3EngFXxKxNQSJHZmo2XTN89xhX21aTmQyq5r+DohD8OF12FHXJ3cfL6K5YNDdRPIquLuq18Oz/dFrZjKgzEHtTNBZDUw+lUBdmHRuKSLoAOdBykwm3EdqnTdsvmNxGbT27wk+q/aMnUq38dcJbWaSsWLFUKG9yieVIXKMvG/4KpkSInFRFyKY9Qo0KvqwakFrXNcdkyHDWIGUzvQsFrphw455fXNAujDQuXm2sczmD2EeMaqElcwizTMmF0rCrZ3qGB3Vy7CucYVcFtQFoBdOUifAcV1C1Y7YG2ZcRJ/aFJex9aK9Smwb/vkht6wcHeBRaoY0VKo6dSVN6HpC1fTuJSN0wloaTJbtCe5dCvmCSgGL4eKzSwjVEjGc6sMONd52RB5NkLqfRTop1AHZEcDI8CNEf6GWzaVIMDdMiY88kyU6DQZAAPLKe1bKaMUReOAMaASOsDu3jcVSFhtVP0j7+ScKonNULqkGgxqkSkPihbr0+sY3ZBLOKvDTA7ymq9pkNgeKUMWtNZJPgsjI2SAeJ4q1jSAUOw/GZdCq409jMiM0t1nkGQY+Cd41CvWHVrS5kK82p9lI3RjFS4Q7UfHmm2jWkJElnBqellz3Bb0bviB5quX969EIMC0lrXIJzEHiETt6v8ADzz4bj2gocLfbGWqsUtpo2d3kVmHMr3N5Gbj1XtLSf1bj9Qltzldxe46zmAjZme+BPxlCy5ejWsRHN9JpXqrbRXqZoA4lyiqFa7S1cVYRG13dOqR6w7Ra0MaSMw0TAkaxJ14qowNG46EaxqInQ8VK4KMtQhorvo8HE9oj5lY2nGyYz60meY2Yy7fBSvYdxU+BWrriqGDjmRnA3lDJ4g4rRg6G4ZtO9aR1W+H9U4X97GQK8pU2UaYpsGQ0+p4lV3U46z9ToF51k/TLIx8oq7Dn5uMN5qOq9oyaJ+/itriqSc+4blqyiX8hy+SXgZQqknMhW8Kws1MyIb5okzDG/iyA4rapjFGmNluccPuFjkb5C1taNYMgFlRyDs6SMP4SFXusbaQS0pXpsJRCVa+AdCjuKoI4pCqYxUfV2W7950HanCyqsa0TU2uOY8l0g0D77aKVcWokLoDW0n/AIgUJxrBQWktdsmMpzCBPDWjjnSW2JElveN3bySk6dPBdOxiwcAQRB8R3cQl7+zm7WgIKqjPgmUQb0epFpnim+1rEIfQoAclba2EuT16FHgUZcKw2ow6yDxH0QllQhW6bgUIReY4jNp++C8xHFAOrJDi2fjH0Wtud33mkLpRiZdVDQS17C5jo7RBb2gAwm1Q1gWSxHlg+oajiajnDae2D+kxPjKLNzQzCqUT8+JMklFWBWpEpvCxbbBWLcOD5dKiDncQe778lAKq39aqNJcJPWne092a99eN5jty81Htr3aldpuEsqnhvSVtKsWsqOY2YqFrRJjc0nXTetLq1lwe1xYRqASGu5OAPgd3NCLrBnvql20xoMTAJ5THGIE7+CXZrWDK2kzr3R3FTXYaxZsUcwC4yXumIby4neUTujv3x4BUsOAaxjHNaGsDQ0bpHAK8aO1J8SosKdKFG3L3ZaIk4tpCG5vjuHMlQ1LhrGmNPNA7q612syfw7hw2jvPLzSJSGxRPiV7M9cvO/c0eGqD1ap7VbbTkbTojXP70VC+uJyAQpaE2B8Uxj1fVHvH4cyghxpx96qeGRPkEv9Lbp4qkHJL3tJO9UqpYK9nRbPGdlwIcHdpPnKLVelTZEjYJymAQe9ckFweKnZeuORKF1aErDroxnQjxCN4djwqdV+vNcpwTEHEQdyZLWvopJwxj4y0aMXt5HEfEcwle6tYO7VMtnebTYO5eVcNFTIETu4FdGWHSjoobOcFSsMHkrlzhzmkgjt5LKVmTzR6BhWdTjTRTURBV9mHVCOqwqRuD1sjsHxH1XGkRrhjSSlfELKm6s+oBm4zJzjsTVf4S8wHPpsH6njyEqk6ztmCalYuj8gy8SqqsSJ5ptgO3owMlWvb8Mybm7TsVnFMeoEbFGm4DSXHXwSzVfJlO9AecLPt7/wAxWI9/Yw4BYu04I7a92lX2lsCnaTlgPWzXquHLYOWpmYWNoKeg9u8wdQdx5HeO1UtpbNeOHmt9HYPfQ66NyxtU5MbIk6zwa0+aZLy4EQMhw+qSrGqXG3oUvdaA58abRzcT2DIbkfxW5Ay7lDb9K6yvf3MNLvD6oVTho2nnM6A+ZXl9d5yc40Q+i9zzJynU8BwCQ0OQQFUvOsAalQ3NUaDcvHVGgQEJxSuQIGpRxQLE3ps0F/LWeCVKjRuTjjwa/qzJBjvSlc0S0wqExTXSuV6xua2FMlEcOtoMkLJNGpBXBqOyM0epGOxDLYQRw3fuimneo59ZREKWFfXijVlcApaouiVesbiCktDExtrWIuGSIL25TOZG4Hmluvb7LiCCCDmCiltWdTa5zMxllwE5xyzW988V6e2B1m+Mc10WcwZRkaOMdqiu7ssGZJmd5W1BypY6yQ2BJz7FVTFSkT2PFoFucRa6qW7XW1jhoI/ZR3bv4buxL1qCbx3Jz/hIR3EDFM9wVYgBvC0p0pcG8SB4kD5qUhWMLpzWpj9bfOfksCH7Y7Fi2lerDhZa9btcqoW20mehGFkOW20q22vRURaZhZDlsHqs2ot9tccOPQZw23Sc4y7N58kQxGtLieaUMCxP1NTa1BBae9MV3eMJ1/DtdglT2rWPg8RQvakmFXbW1Gg3qKpcg1C0ZkaqN4ySHHByZMb5o5oZiFZzg4gweO9bPohZ6uexajhOcHNJJBKoXdWSnS9swRogFzhOUwmKQLQNsagJiM0UpNBEjUaqhTw45kagq/QpOBnfvQTYcUEreCOwq8DkhtLTJW2VskhjEWW1FatH5oSLjPRXbWpnPYgaCQze0OYA5ucajkdVbtKjQ/ap5AjMdu8fHJD6FQEgbiIVi1olpjhtCeWX7IUjmyCoAHGBoSoLyJHcrBMl3NUcSfstceDSfAH6Kz8fkia58OfYFLq73fzn/E4FG8V90dqE9FaebzyaPHa+iKYufdHaVSKBZRDo4ybmny2j/kKoFGOiLJuJ4Mcfi0fNCEOWyvFIvVgWCZC9hNd30Rume9QeebQHf6ZQa4sCww5rmngQQfApuE+g3ZWQrrrRRm2K7DitC9hTGiRuV/AsP9bVawhxJ0AGvadw5rG8NS0L9DcDZctftgjZczPdGeR4IF6aiKNxb06MsDaLp2TEy/U8dF2fD8OZQohjAG7zG8nXPeuJ+nETdUT/AMojweZ8wkRlshzjiEzDcdqU6oe4lw3idcoTpheLsrN2tDwXNVLQuC0ggkQQck1x0FPDqDmDivHOAS7bdLqZgOYRu4+JRdl0yp7jg7sKTKODFLTHPUdUrKige9KbDN6dMcFFWorZr81u90hC2Ege+QtgZUlUcVXa8AgcdFgWlgU5U9CpBA3rSmYWzmGZWHaMFg6dnuRe+ugDDQgGFv3q26uAczmd3GFqhr4Y5Ernx2koT0juP4NaN1J3xBHzVp1Sc0Bxqr/s1U8S0eLm/JXwr8ojlZ6YP6Ls6rjxd5AfVT4sev2AfNbdHGRSHMuPxj5KLET13d3ksYSKZTD0MZ16h4NaPEn/ALUvuTT0LZDaruLmjwB/7kISGPuXqzuHj+yxCEdkSX0mpitiNrRIkNG27fIkugg7v4YHPaTY0Hc6QkzDaj6mJXFUQ71YNMZwARDI1/S5OSJnLnUMVx0ZtH629MfyjY/0QhN50EtiRsl7JMZOncTltA8OKY2XL4ksiOeahGJML4zEDOR+YwP9LvBd071ET7r0bn/h1geTmx4kT5IvgeA+zCHbLnnPaAz7JOaZGXTDo4ePyQ65r9c70uxvyMrzeEd1WyXEvTa4GvbkaBlQf5mrst2ZC556RMBFwGE5ObtQd4BzI5hJreMdJcOJOC1Ru86N1maDaHgfBCKtJzcnNI7RCpEkSYsAo1WUjWaAWuJGzv2WauG7UkRyS7COWmJOYxrAQWZSDuAzgHcsZqDgxRrobBDj+EjNaVKwMiYcNRvHaFFSuLeuXVH5bDSQJgiBkAd6Uzcu2i7aMk6zn4pbr0P0OFGuHAHepxWbxHjuSX7W7PPVQ+tPEof0nfsG+/uQ1snMckHw2qXVQJJBM55xE58kINVxyJMdqtWl56sO2feOU8ByRKvDvYyuxCazKTYMmD2xKMU3tOuUIJ6PMO9ZWfVcJFNuU/mdv5wJ8VeqalYoJvDnNovVr8NEN/qqVi4uuahJnZYB4lvzCjDZMdilwYTVrO4uA8C4/TwTYQSfBcpNoLV6kNJ5IDjzotR+qoPJx+SJ4jU3IT0oMUaQ5l3g3/yTZfBUPpdwOnFJn8oPjn80PunS5x5lGbJmywcmgeAQJ5zSmPRE4px6IsigTxe74ABJF7W2WkjI5x4LoHRinFrT5gnxcULCQThYqvto5+CxYEJHRP0gXtgQ1j/WURl6mpJYB+g6s7suS6j6Lek9tcGsC4tuKjtv1biASBJJY6evm45DPTJIXpe6G+xXHrqTf9nrElsaU35l1PkIzHKRuXPmOIIIyIIIOhBGhB3HmnIla0+xdnmQvGUSS4kyJAE5iANd+8/Bcg9GvpNPVtrx2sBlfIRwbW4/z+PFdntB1Z4knxMgdwMLm2gIwTfSD2T9I7skKIeXuyGRR25rbInuQ4VBuHx+qRdLmFFUMfCpcNgJYx142czvTTdV8tEk9IXAyJgnSM44lTxfSiSAV7TEaIPUtwQQQDKOU6zag1z+mUqk+3gnxCoUmIaEu8sAHRAhRmxnLimO+t5PNURTXejBbxCxcxuWYQkpxvRuQHFLGAHjv+qJSOwFrFhWIzDFgWKxYWpq1GUwJLiB3an4SsZx1DoFaCnaNOW0/wDiHv0B7oVLF7cNedmcydYRvCqgb1ACAIEHcIyQ7H6EPJ4qaqWzY6xZEEWzeuO2fDNSdHG9R7uLz8Gj6rW3/EeDHu8AUe6MYW02BqnWakZxo4NGUcVbXHWSTl5QFrnafHEof0rAc+gziD/mc1v/AElOtp0TdVpsqRU6wJkbDhEkDIuB0ASt0qsTSvqNIz1adI5jZObqjjlJ4I5xxA1yTlheqGGOPI+SXaiYL3Kke5L9RTsqQIxV+YC6jgFPZtqA4Uqc9uyCVyfFHZn70C69XGxRcPy0yPBsLH8CX0TPbXcCsVv+yHff9F6k9G+kdf8ASpbitaC3P/FqNA4gtzBH94t8t6+bsXwypbV6lCs3ZqU3Frhu4gt4tIIIPAhfSXSKu2te2jGODmj+JIMg57Wo1HUHilj0xdFDdUBeUA11Sg13rY1fTbmYG8tzMcJ5KtHn+v6w4lbPgrvPou6ctexlrXf1wIpvJ1A0Y4neNAd8cdeAMK6R6LsIa4+0OaSQYYMoHF3asnJJdGRi2+HZ8SxWTDdBoePNU2Yj+aFA0DeJ7dF619OYIEqGcvRVGOG11dNjQpSxhwMwPspsr0WEZAhLmKhrQQMygi+hSFKgIdsgwRpz5IiakjehdZnWJJVq2rbjmqUIZBdUd6F12b0cu3CNEGrAysOSBlfNVK2bfgr9yxU6gzPxWpmgO9w0jNgJHDePqEOTpRpaLW8wanUziDxGR/dGpgtCam30eWc1jUIyALAeBOvgI8UHr4I8GGw74H6J56Os9TSZT4ZnL8RzJ1QWz/ngUI96MD7cSDvy+CEYzc5lqM2vNB+lFi6lUE6PaHtO4g/cJNH0O34CWiKVY/oj/EYTZghIw9jYA2mzMRO04u1PaEuNt3OtX7Ikue3XcGkGVOL+p6ptIElrQ0ADTqiMyNV6tUc6efa01g82lajTps22UwQxsu2y12gJJK5xj902tij3MMtaGNB2trIUWn3v5nFbOtarj7pz4wP3UlhgDhUNQncRAk8N/YAusTaw6pJPTMUyp9pCAVE3X+E1HgRkBmZ+iVbmhBI1iQpZLPpZB6AaLNuvTac9qowR/M8BdZxk/wAGpzaR45fMrm+A4e83dCRkKjXT/J1/+ldMvWyGD81Sm3xeJWBDJ/Z7eAWK3CxdgPo+eqN/Vt37dB7qTgZmm4t8tRyKbcD9K11RgVKdGuBxBpOPGTT6p/wpFq1FAESYuUUxlxltC6ug6xpPYK2bqLtkerqEnb2C0waf4uIzy0XX+juGeopMptzgCY0mMykf0Y9Fqm0bh5YBswwTmCfeJyyMQO9dSoUSz+qkvs7hRXDFpJsvjQoTeOPPzVi+vXN1P7IVcXk70pDT1+LRkZ++xVbquHDLNUr10oVUrkb0aQDZPetgKGzI8FF7VOqitapz7UxMWy3UJkwVWqU3O11VnIrxpA1MrTATeU4VY23WB3FFr8tIXjWaLjgfUp7KmbmF7dMzW9PgFmmmtKgNriidrS5KCiwDNWGPAORQMIvU6kaZptr4O28s6bHdV7fddElsajvHyShRfKb8Cvoa1uuQPySXJxeoYoprGCrPAhRbsE5ZzIEkkjXX7C3qWVMaMnlJ5d3FS9KMXZRb6x8xOzkJMnTJKtTprS0bSrO/ule5RdGdafw8q2qUZtB5zQ0AAAZbgBvJ3dgQ7FsTp27Nt/cBq774qjT6RmppbvY0fieQ0fHXegGLXVWoST6tw02RuCCy6K+Da6m/oNvOnFwXkiAzc0DzO9aYdirHh5qCXaiMihl5aNzkOYfghZlpyKmb9FKXk6P0bsyarKkdWHmf7hAkd6ZL6gXgQ4tIcHAjWRMdmq5vg+KPc6m0OLdnX73roFhirKjtgHrZZcTwnisRzIPU1/8A9FT/ABO+qxH/AOy6n5CvEegYcKt3tkB87MiY1A3wui9HeiNrUAI9oJIBD2tbVZ/kLT3EKl6NsFpXFVo9ne+M31HkCm2MyGNGbj39q7DZU3MhrIDBoGtDeSRdJxQytJvDXDOj7aVNrQQAOFPYnmWnQq8aQAgZqcvMZmVpTp/eSgb0pSAd9bPJyA75EeCFX1g4Ccu7d9E7+yyqV1ZtC1Tw7Dl1xdFrtl2R+80OubjNdOuujlOqMmtnn/Rc86U4BUoOJI6hORT4TTFSQHfXW9vdQRzQ+o+OxaesgymgDELgqOs+c1To3MhbucuMJ6bZOei8r3zRInPkqb7jcFDTtQTK44te1AqahWlD61EjMeCls608VxwTptk5q1TplDmXYGuSI4ddU3mNrxQSNRapEhELPENjfvUVagQOKC17toJkhvagzRieDFi17tUahgEgB4BzGTh45SgTb1oZPq5cZJAI3zz0z05IBiHSZwlgYNjTXMjfp5ISb6k7MEsKqqlKEcQmyEZy1hnEroEy5lQ+QG4CNyFPqUjoXNKqVMSe38e0Oahfftd7wz5Lc0LUixdVHt0dtBCbuqHGYhb1HncVCW95RIBvS5ggcXnYBJjcmLBnupFzng7XDeqeGvbTZ+WQPgM53qm+uZJnUoX0JIbf/l9f9XifosSttu5/FYsxmj36OLe/q0qQ9qa21ZMMLWlwzza07MxyLo8F0mm9wdAE7tFy3o5e1aBdsue4xkCcp3HZ7ym/DL2o4AudBJzzz8Bv8FHbNyY6EUkOdMn8UBTUGDX4n5IXZteeziflxV+nU70kMul6p1mnPz3D6qUvMcfJULy43SXu5DILDkR3F0GiRryyUFe6ZcMqNqAbMH/2HeJVOtZudm8hoGe4nv3eCjfUnQ5nKUSNa05Z0lwx9B5H4dxG8Jf9euj9NKToa45sjYeORkhw4QuUVK+ZVtb1E0+MM2lznqpLy/M7M5aoNSrryvX2iEzyL0KUbjNErdxOgJ7EIw632j7wHim7DbUEQDAEaSP3Qy4amV6Nu9+jT2nJE7fCsgXaokKeyM1DVeZASmwiKtggcORU+H9HgwcR8Vdwx/FFabskuUw0gRUpFjdk6blzrpnR6zagJk5Hu3rqF6/LNcy6VvcypE5ajhqjpfTJrgrio48VjqLomMlYfclwiJ7FrSaSIIIbvMaqrRJ5bbGjgXE5QDA+qmt7Jj3FslsaHUd68tnNAJGvxWtq8gkhacb0cMc8kNc0kbiYnPcvfZnUiHRMa5acQqnryCSFLRv3AOBzn7+a7GbqLtJ7TmRMHsWlSnJ6rN6r2lXd3o3Ts2uZ1X9ZY+BEPs9T8o8f3WL32Kpx+K9Q6cNNP3z97imzov73f8gvViil8KR2q+6F5a71ixKNJrnRVqeixYsZwGxP5qlR+a8WLUaDumf/ANWt/I7yK4c5erFbR8J7vp7SWw1WLFSICeE+94J+wz3T3LFiRL6Gg5T/AN198VXvNG93ksWJbDNcN97x8kXYvViRMZEp4hoFzXp1/vG9h81ixNp+gT+AK39wqx+Efe5YsVYkobivKO9eLFqOIn71qF4sRGMuWGp7EZsveCxYlsOIXWLFiEI//9k=" />
                    </td>
                    <td>Met Museum</td>
                    <td>I like pie.
                        <br/>
                        <textarea className="messagebox">
                        </textarea>
                        <br/>
                    <button>Send</button>
                    </td>
                </tr>
                <tr>
                    <td>John
                        <br/>
                        <img className="users" src="https://i.pinimg.com/originals/11/86/fc/1186fcee5fbd0af88e313b1ee53dea46.jpg" />
                    </td>
                    <td>Tennis</td>
                    <td>Indoor or outdoor courts?
                        <br/>
                        <textarea className="messagebox">
                        </textarea>
                        <br/>
                        <button>Send</button>
                    </td>
                </tr>
            </table>
            <br/>
            <br/>
        </div>
    )
}
}
export default Messages;