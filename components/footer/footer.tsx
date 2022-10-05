import { Badge, Link, Text } from "@nextui-org/react"
import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { appTitle } from "../const";

const Footer : FunctionComponent = () => {
    return <div className="bg-transparent py-8 px-4 dark:bg-slate-800/25">
        <div className="flex">
            <Badge color={"default"} variant='flat'>
                {appTitle}
            </Badge>
        </div>
        <div>
            <Text className="text-gray-500 text-sm font-bold text-center">- AMEVI GREGOIRE DOUHADJI -</Text>
        </div>
        <div className="flex justify-center mt-4 gap-5">
            <Link color={"primary"} href="#">
            <BsGithub width={140} />
            </Link>

            <Link color={"primary"} href="#">
            <BsLinkedin width={140} />
            </Link>
            
        </div>
    </div>
}

export default Footer