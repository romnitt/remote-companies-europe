const csvData = `
7Shifts,https://www.7shifts.com/
15five,https://www.15five.com/about/careers/#open-positions
Ada,https://ada.com/careers/#want-to-joinada
Aha,https://www.aha.io/company/careers/current-openings
Ahrefs,https://ahrefs.com/jobs
Airalo (?),https://www.airalo.com/
Airbase,https://www.airbase.com/
Aircall (?),https://aircall.io/
Alguna,https://www.alguna.io/
Alice Technologies (Prague),https://www.alicetechnologies.com/home
Amplemarket,https://www.amplemarket.com/careers
Apify (Prague),https://apify.com/
Appcues,https://www.appcues.com/company#work
Appostrophe (Stockholm on-site),https://jobs.appostrophe.se/
Atlas Metrics (?),https://www.atlasmetrics.io/company/careers
Atlas Metrics (preference for Berlin on-site),https://www.atlasmetrics.io/company/careers
Atlassian (?),https://www.atlassian.com/company/careers/all-jobs?team=Design&location=&search=
Automattic,https://automattic.com/work-with-us/
Beautiful.ai,https://www.beautiful.ai/careers
Bending spoons,https://bendingspoons.com/careers
Better Stack,https://betterstack.com/careers
Bilby.ai,https://www.bilby.ai/
Bird,https://bird.com/
Bolt,https://www.bolt.com/
Bounce (?),https://bounce.com/careers
Brave,https://brave.com/careers/
Buffer,https://buffer.com/journey
Butter,https://careers.butter.us/
Capchase,https://www.capchase.com/
Cast AI,https://cast.ai/
Casual (?),https://causal.app/careers
Ceros,https://www.ceros.com/
Chameleon,https://www.chameleon.io/
Checkly,https://www.checklyhq.com/
Chromatic,https://www.chromatic.com/
Circle (?),https://circle.so/
Circuit,https://getcircuit.com/
Cloudbeds,https://www.cloudbeds.com/
Cloudtalk,https://www.cloudtalk.io/careers/
Coder,https://coder.com/careers
Contra,https://contra.com/careers
Convertkit,https://convertkit.com/careers
Count,https://count.co/
Customer.io,https://customer.io/
Cyberhaven,https://www.cyberhaven.com/
Decentriq,https://www.decentriq.com/
Deel,https://www.deel.com/careers
Deskbird,https://www.deskbird.com
Dice,https://dice.fm/jobs
DNA Inc,https://www.dna.inc/
Docker,https://www.docker.com/careers/
Dradis,https://dradis.com/careers/
Draftwise,https://www.draftwise.com/careers
DuckDuckGo,https://duckduckgo.com/hiring
Elastic (?),https://www.elastic.co/
Elicit (?),https://elicit.com/careers
Emplifi (Prague on-site),https://emplifi.io/careers/open-positions/prague
EPI,https://epicompany.eu
Equals (?),https://equals.com/careers/
Eraser,https://www.eraser.io/
Eyeo (?),https://eyeo.com/
Faire (?),https://www.faire.com/careers
Fibery,https://fibery.io/
Float,https://www.float.com/about/
Flow (Amsterdam hybrid),https://work.withflow.com/?lang=en
Flowstep,https://flowstep.ai/
Framer,https://www.framer.com/careers/
Ghost,https://careers.ghost.org/
GitBook,https://www.gitbook.com/about#open-roles
Github,https://github.com/about/careers
GitLab,https://about.gitlab.com/jobs/
Goodnotes,https://www.goodnotes.com/
Grafana Labs,https://grafana.com/
Grammarly,https://www.grammarly.com/jobs/openings
Graphy,https://graphy.app/
Gumroad,https://help.gumroad.com/article/284-jobs-at-gumroad
Hashnode,https://hashnode.com/
Helpscout,https://www.helpscout.com/company/careers/
Heyflow,https://heyflow.com/jobs/
Hopin,https://hopin.com/careers
Hostaway,https://www.hostaway.com/
Hubstaff,https://hubstaff.com/jobs#hsds-open-positions
Hugging Face,https://huggingface.co/
Hygraph,https://jobs.hygraph.com/
Incode,https://incode.com/
Interaction Design Foundation,https://www.interaction-design.org/about/careers
Invert,https://invertbio.com/
Italki (?),https://company.italki.com/careers
JetBrains (Prague on-site),https://www.jetbrains.com/careers/jobs/
Jitter,https://jitter.video/
Kinsta,https://kinsta.com/careers/
Komoot,https://www.komoot.com/jobs
Kong,https://konghq.com/company/careers
Kubit,https://kubit.ai/
Lightdash,https://www.lightdash.com/
Linear,https://linear.app/careers
Lingoda,https://www.lingoda.com/en/p/careers/
Liveflow (?),https://careers.liveflow.com/
Lodgify,https://www.lodgify.com/
Logitech (Cork on-site),https://www.logitech.com/en-us
Lokalise,https://lokalise.com/careers
Lumenalta,https://lumenalta.com/remote-jobs#open-positions
Lune,https://lune.co/
Luxonis,https://www.luxonis.com/about-us
MagicBell (?),https://www.magicbell.com/careers
Mapbox,https://www.mapbox.com/careers#jobs
Meister,https://www.meisterlabs.com/jobs/
Memberful,https://memberful.com/jobs/
Metabase,https://www.metabase.com/
Metalab,https://www.metalab.com/about
Mews (Prague),https://www.mews.com/en/careers
"Miro (Amsterdam, London on-site)",https://miro.com/careers/open-positions/
Morphic (?),https://morphic.com/about
Move.ai (?),https://www.move.ai/
Mozilla,https://www.mozilla.org/en-US/careers/listings/
Mural,https://www.mural.co/careers
n8n,https://n8n.io/
Neptune.ai,https://neptune.ai/jobs
Northvolt (Sweden on-site),https://northvolt.com/career/locations/
Nory,https://nory.ai/careers/
Novu,https://novu.co/
O0,https://www.ozero.design/
OfferFit,https://www.offerfit.ai/
Onesoil (?),https://onesoil.ai/en
OnTheGoSystems,https://onthegosystems.com/
Overleaf,https://www.overleaf.com/about/careers
Oxolo,https://www.oxolo.com/
Paired.com (?),https://www.paired.com/careers
Panaxeo,https://www.panaxeo.com/jobs
PandaDoc,https://www.pandadoc.com/careers/
Patchstack,https://patchstack.com/about/#careers
Payara,https://www.payara.fish/join-us/
Percona,https://www.percona.com/about/careers
"Personio (DE, NL on-site)",https://www.personio.com/about-personio/careers/
Perspective.co,https://www.perspective.co/
Photoroom,https://www.photoroom.com/
Plain,https://www.plain.com/careers
Plex,https://www.plex.tv/
Popcorn,https://www.popcorn.space/
PostHog,https://posthog.com/
Prima,https://www.helloprima.com/careers/jobs
Primer,https://primer.io/careers/
Printify,https://jobs.printify.com/jobs/
Prisma,https://www.prisma.io/
Prismic,https://prismic.io/jobs#jobs
Promaton,https://careers.promaton.com/
QuantCo,https://www.quantco.com/
Raya (?),https://rayatheapp.com/careers
Raycast,https://www.raycast.com/careers
Rayon,https://www.rayon.design/
Readymag,https://readymag.com/readymag/we-are-hiring/
Realpad,https://www.realpadsoftware.com/
Remote Company,https://www.remotecompany.com/jobs
Remote.com,https://remote.com/careers
ResourceGuru,https://resourceguruapp.com/join-us
RevenueCat,https://www.revenuecat.com/
"Revolut (NL, IR, PL, DE on-site)",https://www.revolut.com/en-US/careers/
Rossum (Prague on-site),https://rossum.ai/careers/
Rows,https://rows.com/about
Saas.group,https://saas.group/careers/
Sastrify (?),https://www.sastrify.com/careers
Scarlet (?),https://www.scarlet.cc/
Scavenger AI (?),https://scavenger-ai.com/
Sequence,https://www.sequencehq.com/
Shopify,https://www.shopify.com/careers#ux
Silverfin,https://silverfin.com/
Simpleclub,https://simpleclub.com/
Skylum,https://skylum.com/careers
Slab,https://slab.com/careers/
Slite,https://slite.com/jobs
Smartcat,https://www.smartcat.com/
Sourcegraph,https://sourcegraph.com/jobs
Spacelist,https://spacelift.io/
Speckle,https://speckle.systems/
Spectro Cloud,https://careers.spectrocloud.com
Speechify (?),https://speechify.com/
Spoke.ai (?),https://www.spoke.ai/
Storyblok,https://www.storyblok.com/jobs
Stravito,https://www.stravito.com/
Stripe (?),https://stripe.com/jobs/search?l=remote
StudySmarter,https://www.studysmarter.co.uk/career/
Sumsub,https://sumsub.com/
Supercritical,https://gosupercritical.com/
Superlist,https://www.superlist.com/careers
Supermove,https://www.supermove.com/
Superside,https://careers.superside.com/
Synthesia,https://www.synthesia.io/careers#open-positions
Tabby,https://tabby.ai/en-AE/careers#careers
Tailwind CSS (?),https://tailwindcss.com/
Temple (?),https://temple.fans/
TestGorilla,https://www.testgorilla.com/careers/
Theydo,https://www.theydo.com/careers
Timescale,https://www.timescale.com/
Toggl,https://toggl.com/jobs/#jobs
Tomorrow University,https://career.tomorrow.university/
Toptal,https://www.toptal.com/careers#positions
"TravelPerk (Barcelona, London on-site)",https://www.travelperk.com/careers/
"Trustpilot (Copenhagen, London, Amsterdam on-site)",https://business.trustpilot.com/jobs#open-jobs
Twilio,https://www.twilio.com/en-us/company/jobs
Typeform,https://www.typeform.com/careers/
Udemy (Dublin on-site),https://about.udemy.com/careers/
Upwork (?) contract roles,https://www.upwork.com/careers/contract-roles/explore
Uscreen,https://www.uscreen.tv/careers/
Uxcel,https://uxcel.com/
Vectary,https://career.vectary.com/
Veeam (Prague on-site),https://careers.veeam.com/vacancies?query=&department=&location=Czechia&state=all&city=all
Virta (?),https://www.virtahealth.com/careers
Voltron Data,https://voltrondata.com/careers
Volvo Cars (Gothenburg on-site),https://jobs.volvocars.com/
Weaviate,https://careers.weaviate.io/
Whereby,https://careers.whereby.com/
Whimsical,https://whimsical.com/company/careers
Wikimedia Foundation,https://wikimediafoundation.org/about/jobs/#section-1
Workable,https://apply.workable.com/careers/#jobs
Workday (Prague on-site),https://www.workday.com/en-us/company/careers/overview.html
WorkOS,https://workos.com/careers
You.com (?),https://you.com/
Zapier,https://zapier.com/jobs#job-openings
Zealy,https://zealy.io/careers
`

export default csvData
