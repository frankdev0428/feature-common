function findMinArrowShots(points) {
    if (!points || points.length === 0) {
        return 0;
    }

    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [start, pointEnd] = points[i];
        if (start > end) {
            arrows++;
            end = pointEnd;
        }
    }

    return arrows;
}
