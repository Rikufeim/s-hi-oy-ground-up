import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Maakaapeloinnin hyödyt",
    excerpt: "Miksi sähköverkon maakaapelointi on kannattava investointi? Lue lisää hyödyistä.",
    date: "15.1.2026",
    slug: "maakaapeloinnin-hyodyt",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Talonpohjan tekeminen vaihe vaiheelta",
    excerpt: "Näin talonpohjatyöt etenevät - opi prosessin eri vaiheet.",
    date: "10.1.2026",
    slug: "talonpohjan-tekeminen",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kotitalousvähennys maanrakennustöissä",
    excerpt: "Hyödynnä kotitalousvähennys maanrakennuspalveluissa - näin se onnistuu.",
    date: "5.1.2026",
    slug: "kotitalousvahennys",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Blogi = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blogi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Ajankohtaista
            </h1>
            <p className="text-white/80 text-xl">
              Uutisia, vinkkejä ja ajankohtaista tietoa maanrakennus- ja maakaapelointialalta.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link key={post.slug} to={`/blogi/${post.slug}`}>
                <Card 
                  className="h-full group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <h2 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium pt-2">
                      Lue lisää
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogi;
