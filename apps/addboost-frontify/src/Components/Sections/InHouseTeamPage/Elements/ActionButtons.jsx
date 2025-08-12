import Button from "../../../Button";
import recruitmentPDF from "../../../../assets/docs/recruitment-policy.pdf";
import { useNavigate } from "react-router";

export default function ActionButtons() {
    const navigate = useNavigate();
    return (
        <div className="flex items-end justify-center mt-14 gap-6">
            <Button
                bgColor="bg-transparent"
                textColor="text-white"
                border="border border-white"
                iconColor="white"
                hoverBgColor="bg-gray-600"
                text="View OUR Policy"
                onClick={() => window.open(recruitmentPDF, "_blank")}
            />

            <Button
                bgColor="bg-white"
                textColor="text-black"
                hoverBgColor="bg-gray-300"
                hoverTextColor="text-black"
                iconColor="black"
                onClick={() => navigate("/contact/Become a Member")}
                text="JOIN OUR GLOBAL TEAM"
            />
        </div>
    )
}