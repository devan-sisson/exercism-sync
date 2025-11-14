#! /usr/bin/python3
def get_rna(base):
    return {
        "C": "G",
        "G": "C",
        "T": "A",
        "A": "U",
    }.get(base)


def to_rna(dna_strand):
    rna = ''
    if not len(dna_strand):
        return dna_strand
    if len(dna_strand) == 1:
        return get_rna(dna_strand)

    for base in list(dna_strand):
        rna += get_rna(base)

    return rna
