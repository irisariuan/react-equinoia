import BigLink from "@/components/ui/bigLink";
import { Box } from "@/components/ui/box";
import { ParagraphTitle } from "@/components/ui/paragraph/title";
import Separator from "@/components/ui/separator";
import Store from "@/components/welfare/store";
import Link from "next/link";

export default function () {
    return (
        <Box itemsAlign="left">
            <BigLink href="/welfare/accessories">Accessories</BigLink>
            <BigLink href="/welfare/catering" disabled>Catering</BigLink>
            <BigLink href="/welfare/clothing">Clothing</BigLink>
            <BigLink href="/welfare/entertainment" disabled>Entertainment</BigLink>
            <BigLink href="/welfare/others">Others</BigLink>
        </Box>
    )
}