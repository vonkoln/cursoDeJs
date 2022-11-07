function aour(n1, n2, n3){
    let m = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / 10

    if(m < 7){
        return "R"
    } else{
        return "A"
    }
}
aour(5, 5, 5)