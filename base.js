function sleep(waitMsec) {
    var startMsec = new Date();
    
    while (new Date() - startMsec < waitMsec);
}