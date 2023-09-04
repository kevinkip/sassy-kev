"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("c644851a-e95d-4341-aaef-909e7a62f5f4");
    }, [])

    return null;
};