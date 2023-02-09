
import { useTranslation } from "next-i18next";


export default function WorkCard({ work, showCard }) {
    const { t, i18n } = useTranslation("common");

    return (
        <div style={{ display: showCard ? "" : "none" }} className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
            <h3 className="text-2xl font-medium pb-2 dark:text-gray-100">
                {work?.title}
            </h3>
            <ul>
                {work?.description?.map((item, index) => {
                    return (
                        <li className="text-gray-800 py-1 dark:text-gray-400" key={index}>
                            {item}
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    );
}