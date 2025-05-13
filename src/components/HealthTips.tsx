import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HealthTips = () => {
  const [activeTab, setActiveTab] = useState("diet");

  return (
    <section
      id="health-tips"
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900/50 text-brand-800 dark:text-brand-300 font-medium text-sm uppercase tracking-wider">
            Health & Wellness
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Health Tips & Wellness Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Knowledge is healing. Explore expert information on diet, massage
            therapy, and physiotherapy benefits.
          </p>
        </div>

        <Tabs
          defaultValue="diet"
          className="w-full max-w-4xl mx-auto"
          onValueChange={setActiveTab}
        >
          {/* Responsive TabsList */}
          <TabsList
            className={cn(
              "flex flex-col gap-2",
              "sm:grid sm:grid-cols-3 sm:gap-0",
              "mb-8"
            )}
          >
            <TabsTrigger value="diet" className="w-full">
              Diet & Nutrition
            </TabsTrigger>
            <TabsTrigger value="massage" className="w-full">
              Massage Benefits
            </TabsTrigger>
            <TabsTrigger value="physio" className="w-full">
              Physiotherapy
            </TabsTrigger>
          </TabsList>

          {/* Diet & Nutrition */}
          <TabsContent value="diet" className="space-y-6">
            <Card className="border dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl dark:text-white">
                  Nutrition for Men's Health
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Essential dietary guidelines for optimal wellbeing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Protein Intake
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Men engaged in regular physical activity should aim for
                      1.6–2 g of protein per kg of body weight. This supports
                      muscle recovery and overall tissue health.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Hydration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Drink at least 3–4 liters of water daily. Proper
                      hydration improves circulation, nutrient transport, and
                      waste elimination.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Anti-Inflammatory Foods
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Incorporate turmeric, ginger, fatty fish, and berries to
                      reduce inflammation and support recovery.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Magnesium-Rich Foods
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Include nuts, seeds, leafy greens, and whole grains to
                      support muscle function and prevent cramping.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Massage Benefits */}
          <TabsContent value="massage" className="space-y-6">
            <Card className="border dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl dark:text-white">
                  The Importance of Massage Therapy
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Why and when massage therapy is beneficial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Physical Benefits
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Reduces muscle tension and pain</li>
                      <li>Improves circulation and lymphatic flow</li>
                      <li>Increases joint mobility and flexibility</li>
                      <li>Speeds up recovery from injuries and workouts</li>
                      <li>Breaks down scar tissue and adhesions</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Mental Benefits
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Reduces stress and anxiety levels</li>
                      <li>Improves sleep quality</li>
                      <li>Enhances mental clarity and focus</li>
                      <li>Promotes relaxation and reduces cortisol</li>
                      <li>Releases endorphins—natural mood elevators</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 md:col-span-2">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      When to Get a Massage
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        <span className="font-medium">
                          After intense physical activity
                        </span>
                        : To speed up recovery and prevent injury
                      </li>
                      <li>
                        <span className="font-medium">During high stress</span>
                        : To reduce cortisol and promote wellbeing
                      </li>
                      <li>
                        <span className="font-medium">
                          When experiencing chronic pain
                        </span>
                        : Lower back, neck, or shoulder pain
                      </li>
                      <li>
                        <span className="font-medium">
                          During injury rehabilitation
                        </span>
                        : To promote healing and restore mobility
                      </li>
                      <li>
                        <span className="font-medium">
                          As preventative maintenance
                        </span>
                        : Sessions every 2–4 weeks
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-50 dark:bg-brand-900/30 p-5 rounded-lg border border-brand-100 dark:border-brand-800">
                  <h3 className="font-bold text-lg mb-3 text-brand-800 dark:text-brand-300">
                    Expert Insight
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Massage therapy shouldn't be viewed as a luxury—it's an
                    essential component of health maintenance. Regular sessions
                    can significantly improve quality of life and prevent
                    future injuries."
                    <span className="block mt-2">
                      — D. Galisaheb, Massage Therapist
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Physiotherapy */}
          <TabsContent value="physio" className="space-y-6">
            <Card className="border dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl dark:text-white">
                  Physiotherapy Benefits
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Understanding the importance of physiotherapy in men's health
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      Core Benefits
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Restoration of optimal movement and function</li>
                      <li>Correction of posture and alignment issues</li>
                      <li>Prevention of further injuries</li>
                      <li>Management of chronic conditions like arthritis</li>
                      <li>Rehabilitation after surgery or injury</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg mb-3 dark:text-white">
                      When Physiotherapy is Essential
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>After sports injuries or trauma</li>
                      <li>For chronic back, neck, or joint pain</li>
                      <li>Post-surgical rehabilitation</li>
                      <li>For movement disorders</li>
                      <li>With limited mobility or stiffness</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <div className="overflow-x-auto">
                      <table className="min-w-full table-auto">
                        <thead>
                          <tr className="bg-gray-50 dark:bg-gray-700 text-left">
                            <th className="py-2 px-4 dark:text-white">Aspect</th>
                            <th className="py-2 px-4 dark:text-white">
                              Physiotherapy
                            </th>
                            <th className="py-2 px-4 dark:text-white">
                              Standard Massage
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t dark:border-gray-700">
                            <td className="py-2 px-4 font-medium dark:text-white">
                              Focus
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Restore movement & function
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Relaxation & tension relief
                            </td>
                          </tr>
                          <tr className="border-t dark:border-gray-700">
                            <td className="py-2 px-4 font-medium dark:text-white">
                              Assessment
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Comprehensive movement & function
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Basic muscle tension
                            </td>
                          </tr>
                          <tr className="border-t dark:border-gray-700">
                            <td className="py-2 px-4 font-medium dark:text-white">
                              Techniques
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Exercise prescription, manual therapy, education
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Swedish, deep tissue, trigger point
                            </td>
                          </tr>
                          <tr className="border-t dark:border-gray-700">
                            <td className="py-2 px-4 font-medium dark:text-white">
                              Practitioner
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Licensed physiotherapist
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Licensed massage therapist
                            </td>
                          </tr>
                          <tr className="border-t dark:border-gray-700">
                            <td className="py-2 px-4 font-medium dark:text-white">
                              Treatment Goal
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Improve mobility and treat root causes
                            </td>
                            <td className="py-2 px-4 text-gray-700 dark:text-gray-300">
                              Relieve stress and muscle tension
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-50 dark:bg-brand-900/30 p-5 rounded-lg border border-brand-100 dark:border-brand-800">
                  <h3 className="font-bold text-lg mb-3 text-brand-800 dark:text-brand-300">
                    Expert Insight
                  </h3>
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "Physiotherapy is not just for recovery—it's for prevention,
                    posture correction, and long-term mobility. Every man should
                    consider regular assessments to stay active and pain-free."
                    <span className="block mt-2">
                      — Dr. K. Ramesh, Physiotherapist
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HealthTips;
