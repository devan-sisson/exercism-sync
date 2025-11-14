def latest(scores):
    return scores.pop()


def personal_best(scores):
    return sorted(scores, reverse=True)[0]


def personal_top_three(scores):
    sorted_scores = sorted(scores, reverse=True)
    
    if len(sorted_scores) > 3 :
      return sorted_scores[0:3]
    else:
      return sorted_scores
