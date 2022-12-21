const ol = document.querySelector("ol");
const articles =  [
    {
        "title": "3D computer graphics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/3D_computer_graphics"
    },
    {
        "title": "A* search algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/A*_search_algorithm"
    },
    {
        "title": "Adjacency matrix - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Adjacency_matrix"
    },
    {
        "title": "Algebraic geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Algebraic_geometry"
    },
    {
        "title": "Algorithms + Data Structures = Programs - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Algorithms_%2B_Data_Structures_%3D_Programs"
    },
    {
        "title": "Applied mathematics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Applied_mathematics"
    },
    {
        "title": "Artificial general intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Artificial_general_intelligence"
    },
    {
        "title": "Artificial intelligence in video games - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games"
    },
    {
        "title": "Automotive paint - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Automotive_paint"
    },
    {
        "title": "Axiom of choice - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Axiom_of_choice"
    },
    {
        "title": "Backtracking - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Backtracking"
    },
    {
        "title": "Boolean satisfiability problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Boolean_satisfiability_problem"
    },
    {
        "title": "Breadth-first search - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Breadth-first_search"
    },
    {
        "title": "Bump - Bump function - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bump_function#/media/File:Bump.png"
    },
    {
        "title": "Bump function - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bump_function"
    },
    {
        "title": "Cartesian coordinate system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cartesian_coordinates"
    },
    {
        "title": "Category theory - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category_theory"
    },
    {
        "title": "Category:Computational fields of study - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Computational_fields_of_study"
    },
    {
        "title": "Category:Digital geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Digital_geometry"
    },
    {
        "title": "Category:Mathematical chess problems - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Mathematical_chess_problems"
    },
    {
        "title": "Category:Metric geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Metric_geometry"
    },
    {
        "title": "Category:Norms (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Norms_(mathematics)"
    },
    {
        "title": "Clique (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Clique_(graph_theory)"
    },
    {
        "title": "Closure (topology) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Closure_(topology)"
    },
    {
        "title": "Complete bipartite graph - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Complete_bipartite_graph"
    },
    {
        "title": "Complete graph - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Complete_graph"
    },
    {
        "title": "Component (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Connected_component_(graph_theory)"
    },
    {
        "title": "Compression ratio - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Compression_ratio"
    },
    {
        "title": "Computational economics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_economics"
    },
    {
        "title": "Computational finance - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_finance"
    },
    {
        "title": "Computer graphics (computer science) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_graphics_(computer_science)"
    },
    {
        "title": "Connectivity (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Connectivity_(graph_theory)#Connected_vertices_and_graphs"
    },
    {
        "title": "Constraint satisfaction problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Constraint_satisfaction_problem"
    },
    {
        "title": "Cotangent bundle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cotangent_bundle"
    },
    {
        "title": "Data buffer - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_buffer"
    },
    {
        "title": "Data compression ratio - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_compression_ratio"
    },
    {
        "title": "Data structure - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_structure"
    },
    {
        "title": "Decision theory - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Decision_theory"
    },
    {
        "title": "Diffeomorphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diffeomorphism"
    },
    {
        "title": "Differentiable manifold - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Smooth_manifold"
    },
    {
        "title": "Digital geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Digital_geometry"
    },
    {
        "title": "Disjoint sets - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Disjoint_sets"
    },
    {
        "title": "Dot product - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dot_product"
    },
    {
        "title": "Double factorial - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Double_factorial"
    },
    {
        "title": "Dual space - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dual_space#Continuous_dual_space"
    },
    {
        "title": "Euclidean distance - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Euclidean_distance#References"
    },
    {
        "title": "Euler tour technique - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Euler_tour_technique"
    },
    {
        "title": "Flow network - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Flow_network#Augmenting_paths"
    },
    {
        "title": "GOFAI - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/GOFAI"
    },
    {
        "title": "Geometric algebra - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Geometric_algebra"
    },
    {
        "title": "Glossary of computer graphics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glossary_of_computer_graphics#3d_scene"
    },
    {
        "title": "Help:Category - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Help:Category"
    },
    {
        "title": "Hill climbing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hill_climbing"
    },
    {
        "title": "Homeomorphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Homeomorphism"
    },
    {
        "title": "In-place algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/In-place_algorithm"
    },
    {
        "title": "Independent set (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Independent_set_(graph_theory)"
    },
    {
        "title": "Involution (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Involution_(mathematics)"
    },
    {
        "title": "Keep away - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Keep_away"
    },
    {
        "title": "Kleene star - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Kleene_star"
    },
    {
        "title": "Kleene's recursion theorem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Kleene%27s_recursion_theorem"
    },
    {
        "title": "Konami Code - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Konami_Code"
    },
    {
        "title": "L-infinity - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/L-infinity"
    },
    {
        "title": "Lasso (statistics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lasso_(statistics)"
    },
    {
        "title": "Lebesgue covering dimension - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Topological_dimension"
    },
    {
        "title": "Line (geometry) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Line_(geometry)"
    },
    {
        "title": "Linear programming - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Linear_programming"
    },
    {
        "title": "List of lists of lists - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/List_of_lists_of_lists"
    },
    {
        "title": "Lists of encyclopedias - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lists_of_encyclopedias"
    },
    {
        "title": "Lists of islands - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lists_of_islands"
    },
    {
        "title": "Lists of mathematics topics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lists_of_mathematics_topics"
    },
    {
        "title": "Lists of video game companies - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lists_of_video_game_companies"
    },
    {
        "title": "Local search (optimization) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Local_search_(optimization)"
    },
    {
        "title": "Logarithmic scale - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Logarithmic_scale"
    },
    {
        "title": "Lp space - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lp_space"
    },
    {
        "title": "Manhattan distance - Taxicab geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Taxicab_geometry#/media/File:Manhattan_distance.svg"
    },
    {
        "title": "Map (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Map_(mathematics)"
    },
    {
        "title": "Mathematical chess problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mathematical_chess_problem"
    },
    {
        "title": "Mathematical economics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mathematical_economics"
    },
    {
        "title": "Mathematical finance - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mathematical_finance"
    },
    {
        "title": "Morphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Morphism"
    },
    {
        "title": "Neighborhood illust1 - Neighbourhood (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)#/media/File:Neighborhood_illust1.svg"
    },
    {
        "title": "Neighbourhood (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    },
    {
        "title": "Nipson anomemata me monan opsin - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Nipson_anomemata_me_monan_opsin"
    },
    {
        "title": "Null graph - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Null_graph"
    },
    {
        "title": "Numerical analysis - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Numerical_analysis"
    },
    {
        "title": "Numerical linear algebra - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Numerical_linear_algebra"
    },
    {
        "title": "One-way compression function - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/One-way_compression_function#Davies%E2%80%93Meyer"
    },
    {
        "title": "Palindrome - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Palindrome#Computation_theory"
    },
    {
        "title": "Pathfinding - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pathfinding"
    },
    {
        "title": "Procedural generation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Procedural_generation"
    },
    {
        "title": "Residual neural network - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Residual_neural_network"
    },
    {
        "title": "Round-robin tournament - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Round-robin_tournament"
    },
    {
        "title": "Run-length encoding - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Run-length_encoding"
    },
    {
        "title": "SHA-2 - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/SHA-2"
    },
    {
        "title": "Scripting language - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scripting_programming_language"
    },
    {
        "title": "Star (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Star_(graph_theory)"
    },
    {
        "title": "Star network - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Star_network"
    },
    {
        "title": "String (computer science) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/String_(computer_science)"
    },
    {
        "title": "Substring - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Substring"
    },
    {
        "title": "Superpermutation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Superpermutation"
    },
    {
        "title": "Symbolic artificial intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Symbolic_artificial_intelligence"
    },
    {
        "title": "Synthetic biology - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Synthetic_biology#Applications"
    },
    {
        "title": "Talk:Homeomorphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Talk:Homeomorphism"
    },
    {
        "title": "Taxicab geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Taxicab_geometry#cite_ref-lim2_9-0"
    },
    {
        "title": "Telephone number (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Telephone_number_(mathematics)"
    },
    {
        "title": "Texture mapping - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Texture_mapping#Baking"
    },
    {
        "title": "The Art of Computer Programming - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming"
    },
    {
        "title": "Topology - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Topology"
    },
    {
        "title": "Tournament (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tournament_(graph_theory)"
    },
    {
        "title": "Tropical geometry - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tropical_geometry"
    },
    {
        "title": "View source for Lp space - Wikipedia",
        "url": "https://en.wikipedia.org/w/index.php?title=Lp_space&action=edit&section=19"
    },
    {
        "title": "Virtual organization - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Virtual_organization"
    }
];

for (const article of articles) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = article.url;
  a.textContent = article.title.slice(0, -12);
  li.append(a);
  ol.append(li);
}
