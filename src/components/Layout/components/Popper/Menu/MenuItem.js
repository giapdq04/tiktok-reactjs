import React from 'react';
import Button from "~/components/Button";

function MenuItem({data}) {
    console.log(data);
    return (
        <Button>
            {data}
        </Button>
    );
}

export default MenuItem;