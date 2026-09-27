ServerEvents.tags('fluid', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        event.get(honeyVariety).add(honeyVariety);
    });
});
