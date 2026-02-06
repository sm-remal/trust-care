"use client";

import { useState, useMemo } from "react";
import ServiceCard from "@/components/Card/ServiceCard";
import { 
  Search, 
  ChevronDown, 
  X, 
  Filter, 
  Check 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ServiceList({ initialServices }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically extract unique categories
  const categories = useMemo(() => {
    const cats = initialServices.map((s) => s.category);
    return ["All", ...new Set(cats)];
  }, [initialServices]);

  // Filtering logic
  const filteredServices = initialServices.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="container mx-auto px-4 md:px-8 py-16">
      
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        
        {/* Search Input Field */}
        <div className="relative w-full md:max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
          <Input
            placeholder="Search by service name..."
            className="h-12 pl-12 rounded-2xl bg-white border-slate-200 shadow-sm focus-visible:ring-primary/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <X 
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-600" 
              size={18} 
              onClick={() => setSearchQuery("")}
            />
          )}
        </div>

        {/* Category Dropdown Filter */}
        <div className="w-full md:w-auto flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="h-12 px-6 rounded-2xl bg-white border-slate-200 font-bold flex gap-2 hover:bg-slate-50">
                <Filter size={18} className="text-primary" />
                {selectedCategory === "All" ? "Filter by Category" : selectedCategory}
                <ChevronDown size={16} className="text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((cat) => (
                <DropdownMenuItem 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="flex items-center justify-between rounded-lg cursor-pointer py-2 px-3 focus:bg-primary/10 focus:text-primary"
                >
                  <span className={selectedCategory === cat ? "font-bold text-primary" : "font-medium"}>
                    {cat}
                  </span>
                  {selectedCategory === cat && <Check size={16} className="text-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Reset Button (Visible only when filters are applied) */}
          {(selectedCategory !== "All" || searchQuery) && (
            <Button 
              variant="ghost" 
              onClick={() => {setSelectedCategory("All"); setSearchQuery("")}}
              className="h-12 px-4 rounded-2xl text-slate-500 hover:text-red-500 font-semibold"
            >
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Grid Display */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
          <p className="text-slate-400 text-xl font-medium">
            We couldn't find any services matching your search.
          </p>
          <Button 
             variant="link" 
             onClick={() => {setSelectedCategory("All"); setSearchQuery("")}}
             className="text-primary font-bold text-lg mt-2"
          >
            Clear all filters and try again
          </Button>
        </div>
      )}
    </section>
  );
}