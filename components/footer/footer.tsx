import { Badge, Link, Text } from "@nextui-org/react"
import { FunctionComponent } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { appTitle } from "../const";

const Footer : FunctionComponent = () => {
    return <div className="bg-gray-100/50 py-8 px-4 dark:bg-slate-700/50">
        <div className="flex">
            <Badge color={"default"} variant='flat'>
                {appTitle}
            </Badge>
        </div>
        <div>
        <Text className="text-gray-400 text-xs font-light text-center dark:text-gray-300">created by</Text>
            <Text className="text-gray-400 text-sm font-light text-center dark:text-gray-300">- AMEVI GREGOIRE DOUHADJI -</Text>
        </div>
        <div className="flex justify-center mt-4 gap-5">
            <Link color={"primary"} href="#">
            <BsGithub width={140} />
            </Link>

            <Link color={"primary"} href="#">
            <BsLinkedin width={140} />
            </Link>
        
        </div>
        <div className="mt-4">
            <Text className="text-gray-400 text-xs font-light text-center dark:text-gray-300">- all rights reserved -</Text>
        </div>

    </div>
}

export default Footer