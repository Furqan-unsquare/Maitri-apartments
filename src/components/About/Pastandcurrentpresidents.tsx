import { Card } from "@/components/ui/card";

const presidents = [
	"Late shri. F.C.Rampal",
	"Late shri. Joglekar",
	"Late shri. N.N.Trehan",
	"Late shri. S.C.Kakatwan",
	"Late shri. P.B.Barathakur",
	"Late shri. K.G. Ramakrishanan",
	"Late shri. P.N.Tripathi",
	"Late shri. S.C.Bhatt",
	"Late shri. N.C.Pant",
	"Late shri. M.K.Dharmaraja",
	"Late shri. P.C.Kashyap",
	"Late shri.A.K.Wanchoo",
	"Late shri. Prasad",
	"Late shri. D.K.Bharadwaj",
	"Late shri. Ramanathan",
	"Late shri. R.C.Dey",
	"Late shri. G.Venkataraman",
	"Smt.Krishna Chandra", 
	"Shri. Debasish Ghosh.",
	"Smt. Deepika Nagpal (present)",
];

const Pastandcurrentpresidents = () => {
	return (
		<section id="governing-body" className="py-12 bg-background">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
					Past and Current Presidents
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{presidents.map((name, index) => (
						<Card key={index} className="p-6">
							<p className="text-sm text-foreground">{name}</p>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pastandcurrentpresidents;
