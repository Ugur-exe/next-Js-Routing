import React from 'react'
import { Button, ButtonGroup } from "@nextui-org/button";

const ContactPage = () => {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Button color="default">
                Default
            </Button>
            <Button color="primary">
                Primary
            </Button>
            <Button color="secondary">
                Secondary
            </Button>
            <Button color="success">
                Success
            </Button>
            <Button color="warning">
                Warning
            </Button>
            <Button color="danger">
                Danger
            </Button>
        </div>
    );

}

export default ContactPage