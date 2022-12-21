const ol = document.querySelector("ol");
const articles = [
  {
    title: "3D computer graphics - Wikipedia",
    url: "https://en.wikipedia.org/wiki/3D_computer_graphics",
  },
  {
    title: "A* search algorithm - Wikipedia",
    url: "https://en.wikipedia.org/wiki/A*_search_algorithm",
  },
  {
    title: "Adjacency matrix - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Adjacency_matrix",
  },
  {
    title: "Algebraic geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Algebraic_geometry",
  },
  {
    title: "Algorithms + Data Structures = Programs - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Algorithms_%2B_Data_Structures_%3D_Programs",
  },
  {
    title: "Applied mathematics - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Applied_mathematics&mobileaction=toggle_view_mobile",
  },
  {
    title: "Artificial general intelligence - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Applied_mathematics",
  },
  {
    title: "Artificial intelligence in video games - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Applied_mathematics",
  },
  {
    title: "Automotive paint - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Artificial_general_intelligence",
  },
  {
    title: "Axiom of choice - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games",
  },
  {
    title: "Backtracking - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Automotive_paint",
  },
  {
    title: "Boolean satisfiability problem - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Axiom_of_choice",
  },
  {
    title: "Breadth-first search - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Backtracking",
  },
  {
    title: "Bump - Bump function - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Boolean_satisfiability_problem",
  },
  {
    title: "Bump function - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Breadth-first_search",
  },
  {
    title: "Cartesian coordinate system - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Bump_function#/media/File:Bump.png",
  },
  {
    title: "Category theory - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Bump_function",
  },
  {
    title: "Category:Computational fields of study - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Cartesian_coordinate_system",
  },
  {
    title: "Category:Digital geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Cartesian_coordinates",
  },
  {
    title: "Category:Mathematical chess problems - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category_theory",
  },
  {
    title: "Category:Metric geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category:Computational_fields_of_study",
  },
  {
    title: "Category:Norms (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category:Digital_geometry",
  },
  {
    title: "Clique (graph theory) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category:Mathematical_chess_problems",
  },
  {
    title: "Closure (topology) - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Category:Metric_geometry&mobileaction=toggle_view_mobile",
  },
  {
    title: "Complete bipartite graph - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Category:Metric_geometry",
  },
  {
    title: "Complete graph - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category:Metric_geometry",
  },
  {
    title: "Component (graph theory) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Category:Norms_(mathematics)",
  },
  {
    title: "Compression ratio - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Clique_(graph_theory)",
  },
  {
    title: "Computational economics - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Closure_(topology)",
  },
  {
    title: "Computational finance - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Complete_bipartite_graph",
  },
  {
    title: "Computer graphics (computer science) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Complete_graph",
  },
  {
    title: "Connectivity (graph theory) - Wikipedia",
    url: "http://en.wikipedia.org/wiki/Connected_component_(graph_theory)",
  },
  {
    title: "Constraint satisfaction problem - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Component_(graph_theory)",
  },
  {
    title: "Cotangent bundle - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Connected_component_(graph_theory)",
  },
  {
    title: "Data buffer - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Compression_ratio",
  },
  {
    title: "Data compression ratio - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Computational_economics&mobileaction=toggle_view_mobile",
  },
  {
    title: "Data structure - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Computational_economics",
  },
  {
    title: "Decision theory - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Computational_economics",
  },
  {
    title: "Diffeomorphism - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Computational_finance",
  },
  {
    title: "Differentiable manifold - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Computer_graphics_(computer_science)",
  },
  {
    title: "Digital geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Connected_graph",
  },
  {
    title: "Disjoint sets - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_vertices_and_graphs",
  },
  {
    title: "Dot product - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Constraint_satisfaction_problem",
  },
  {
    title: "Double factorial - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Cotangent_bundle",
  },
  {
    title: "Dual space - Wikipedia",
    url: "http://en.wikipedia.org/w/index.php?title=Buffer_%28computer_science%29",
  },
  {
    title: "Euclidean distance - Wikipedia",
    url: "https://en.wikipedia.org/w/index.php?title=Buffer_%28computer_science%29",
  },
  {
    title: "Euler tour technique - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Data_buffer",
  },
  {
    title: "Flow network - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Data_compression_ratio",
  },
  {
    title: "GOFAI - Wikipedia",
    url: "http://en.wikipedia.org/w/index.php?title=Data_structures",
  },
  {
    title: "Geometric algebra - Wikipedia",
    url: "https://en.wikipedia.org/w/index.php?title=Data_structures",
  },
  {
    title: "Glossary of computer graphics - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Data_structure",
  },
  {
    title: "Help:Category - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Decision_theory",
  },
  {
    title: "Hill climbing - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Diffeomorphism",
  },
  {
    title: "Homeomorphism - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Differentiable_manifold#Definition",
  },
  {
    title: "In-place algorithm - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Smooth_manifold",
  },
  {
    title: "Independent set (graph theory) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Digital_geometry",
  },
  {
    title: "Involution (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Disjoint_sets",
  },
  {
    title: "Keep away - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Dot_product",
  },
  {
    title: "Kleene star - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Double_factorial",
  },
  {
    title: "Kleene's recursion theorem - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Continuous_dual",
  },
  {
    title: "Konami Code - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Dual_space#Continuous_dual_space",
  },
  {
    title: "L-infinity - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Euclidean_distance",
  },
  {
    title: "Lasso (statistics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Euclidean_distance#References",
  },
  {
    title: "Lebesgue covering dimension - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Euler_tour_technique",
  },
  {
    title: "Line (geometry) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Flow_network#Augmenting_paths",
  },
  {
    title: "Linear programming - Wikipedia",
    url: "https://en.wikipedia.org/wiki/GOFAI",
  },
  {
    title: "List of lists of lists - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Geometric_algebra",
  },
  {
    title: "Lists of encyclopedias - Wikipedia",
    url: "https://en.wikipedia.org/wiki/3D_scene",
  },
  {
    title: "Lists of islands - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Glossary_of_computer_graphics#3d_scene",
  },
  {
    title: "Lists of mathematics topics - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Help:Category",
  },
  {
    title: "Lists of video game companies - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Hill_climbing",
  },
  {
    title: "Local search (optimization) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Homeomorphism",
  },
  {
    title: "Logarithmic scale - Wikipedia",
    url: "https://en.wikipedia.org/wiki/In-place_algorithm",
  },
  {
    title: "Lp space - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Independent_set_(graph_theory)",
  },
  {
    title: "Manhattan distance - Taxicab geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Involution_(mathematics)",
  },
  {
    title: "Map (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Keep_away",
  },
  {
    title: "Mathematical chess problem - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Kleene_star",
  },
  {
    title: "Mathematical economics - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem",
  },
  {
    title: "Mathematical finance - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Konami_Code",
  },
  {
    title: "Morphism - Wikipedia",
    url: "https://en.wikipedia.org/wiki/L-infinity",
  },
  {
    title: "Neighborhood illust1 - Neighbourhood (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lasso_(statistics)",
  },
  {
    title: "Neighbourhood (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lebesgue_covering_dimension",
  },
  {
    title: "Nipson anomemata me monan opsin - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Topological_dimension",
  },
  {
    title: "Null graph - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Line_(geometry)",
  },
  {
    title: "Numerical analysis - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Linear_programming",
  },
  {
    title: "Numerical linear algebra - Wikipedia",
    url: "https://en.wikipedia.org/wiki/List_of_lists_of_lists",
  },
  {
    title: "One-way compression function - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lists_of_encyclopedias",
  },
  {
    title: "Palindrome - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lists_of_islands",
  },
  {
    title: "Pathfinding - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Lists_of_mathematics_topics&mobileaction=toggle_view_mobile",
  },
  {
    title: "Procedural generation - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Lists_of_mathematics_topics",
  },
  {
    title: "Residual neural network - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lists_of_mathematics_topics",
  },
  {
    title: "Round-robin tournament - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lists_of_video_game_companies",
  },
  {
    title: "Run-length encoding - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Local_search_(optimization)",
  },
  {
    title: "SHA-2 - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Logarithmic_scale",
  },
  {
    title: "Scripting language - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lp_space",
  },
  {
    title: "Star (graph theory) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Taxicab_geometry#/media/File:Manhattan_distance.svg",
  },
  {
    title: "Star network - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Map_(mathematics)",
  },
  {
    title: "String (computer science) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Mathematical_chess_problem",
  },
  {
    title: "Substring - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Mathematical_economics&mobileaction=toggle_view_mobile",
  },
  {
    title: "Superpermutation - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Mathematical_economics",
  },
  {
    title: "Symbolic artificial intelligence - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Mathematical_economics",
  },
  {
    title: "Synthetic biology - Wikipedia",
    url: "https://en.m.wikipedia.org/w/index.php?title=Mathematical_finance&mobileaction=toggle_view_mobile",
  },
  {
    title: "Talk:Homeomorphism - Wikipedia",
    url: "https://en.m.wikipedia.org/wiki/Mathematical_finance",
  },
  {
    title: "Taxicab geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Mathematical_finance",
  },
  {
    title: "Telephone number (mathematics) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Morphism",
  },
  {
    title: "Texture mapping - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)#/media/File:Neighborhood_illust1.svg",
  },
  {
    title: "The Art of Computer Programming - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Neighborhood_(mathematics)",
  },
  {
    title: "Topology - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)",
  },
  {
    title: "Tournament (graph theory) - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Nipson_anomemata_me_monan_opsin",
  },
  {
    title: "Tropical geometry - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Empty_graph",
  },
  {
    title: "View source for Lp space - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Null_graph",
  },
  {
    title: "Virtual organization - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Numerical_analysis",
  },
];

for (const article of articles) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = article.url;
  a.textContent = article.title.slice(0, -12);
  li.append(a);
  ol.append(li);
}
