export const sortResultsData = (data: any) => {
    const { xmin, ymin, xmax, ymax, confidence, class: classValue, name, image_uri, status } = data[0];
    if (status === "null") {
        return Object.values(data);
    } else {
        return Object.keys(xmin).map(index => {
            return {
                xmin: xmin[index], 
                ymin: ymin[index], 
                xmax: xmax[index], 
                ymax: ymax[index], 
                confidence: confidence[index], 
                class: classValue[index], 
                name: name[index],
                image_uri: image_uri,
                status: status
            };
        });
    }
}

