const ol = document.querySelector("ol");
const articles = [
    {
        "title": "3D computer graphics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/3D_computer_graphics"
    },
    {
        "title": "A* search algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/A*_search_algorithm"
    },
    {
        "title": "AI-complete - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/AI-complete"
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
        "title": "Applied science - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Applied_science"
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
        "title": "Automated planning and scheduling - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Automated_planning_and_scheduling"
    },
    {
        "title": "Automated reasoning - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Automated_reasoning"
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
        "title": "Bag-of-words model - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bag-of-words_model"
    },
    {
        "title": "Bag-of-words model in computer vision - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bag-of-words_model_in_computer_vision"
    },
    {
        "title": "Big data - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Big_data"
    },
    {
        "title": "Bit field - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bit_field"
    },
    {
        "title": "Bit manipulation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bit_manipulation"
    },
    {
        "title": "Blocks world - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Blocks_world"
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
        "title": "Business informatics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Business_informatics"
    },
    {
        "title": "Business intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Business_intelligence"
    },
    {
        "title": "Bézout's theorem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/B%C3%A9zout%27s_theorem"
    },
    {
        "title": "Cartesian coordinate system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cartesian_coordinate_system"
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
        "title": "Category:Computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Computing"
    },
    {
        "title": "Category:Computing-related lists - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Computing-related_lists"
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
        "url": "https://en.m.wikipedia.org/wiki/Category:Metric_geometry"
    },
    {
        "title": "Category:Natural language and computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Natural_language_and_computing"
    },
    {
        "title": "Category:Norms (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Category:Norms_(mathematics)"
    },
    {
        "title": "Chatbot - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chatbot"
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
        "title": "Cloud computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cloud_computing"
    },
    {
        "title": "Combinatorial optimization - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Combinatorial_optimization"
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
        "url": "https://en.wikipedia.org/wiki/Component_(graph_theory)"
    },
    {
        "title": "Compression ratio - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Compression_ratio"
    },
    {
        "title": "Computational economics - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Computational_economics"
    },
    {
        "title": "Computational finance - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_finance"
    },
    {
        "title": "Computational intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_intelligence"
    },
    {
        "title": "Computational linguistics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_linguistics"
    },
    {
        "title": "Computational physics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computational_physics"
    },
    {
        "title": "Computer graphics (computer science) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_graphics_(computer_science)"
    },
    {
        "title": "Computer security - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_security"
    },
    {
        "title": "Computer vision - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_vision#Recognition"
    },
    {
        "title": "Computing - Wikipedia",
        "url": "https://en.m.wikipedia.org/w/index.php?title=Computing&mobileaction=toggle_view_mobile"
    },
    {
        "title": "Configuration file - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Configuration_file"
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
        "title": "Cryptocurrency - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cryptocurrency"
    },
    {
        "title": "DALL-E - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DALL-E"
    },
    {
        "title": "Dark web - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dark_web"
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
        "title": "Data mining - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_mining"
    },
    {
        "title": "Data structure - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_structure"
    },
    {
        "title": "Data warehouse - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_warehouse"
    },
    {
        "title": "Decision support system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Decision_support_system"
    },
    {
        "title": "Decision theory - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Decision_theory"
    },
    {
        "title": "Deconvolution - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Deconvolution"
    },
    {
        "title": "Deep web - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Deep_web"
    },
    {
        "title": "Diffeomorphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diffeomorphism"
    },
    {
        "title": "Differentiable manifold - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Differentiable_manifold#Definition"
    },
    {
        "title": "Diffusion model - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diffusion_model"
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
        "title": "Distributed computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Distributed_computing"
    },
    {
        "title": "Document AI - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Document_AI"
    },
    {
        "title": "Document classification - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Document_classification"
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
        "title": "Edmonds–Karp algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm"
    },
    {
        "title": "Eight queens puzzle - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Eight_queens_puzzle"
    },
    {
        "title": "Elementary function - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Elementary_function#"
    },
    {
        "title": "Email filtering - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Email_filtering"
    },
    {
        "title": "Ensemble forecasting - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ensemble_forecasting"
    },
    {
        "title": "Enterprise resource planning - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Enterprise_resource_planning"
    },
    {
        "title": "Enterprise software - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Enterprise_software#Enterprise_system"
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
        "title": "Expert system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Expert_system"
    },
    {
        "title": "Fintech - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fintech"
    },
    {
        "title": "Flow network - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Flow_network#Augmenting_paths"
    },
    {
        "title": "Floyd–Warshall algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm"
    },
    {
        "title": "Fuzzy logic - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fuzzy_logic"
    },
    {
        "title": "Fuzzy set - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fuzzy_set"
    },
    {
        "title": "GOFAI - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/GOFAI"
    },
    {
        "title": "GPT-2 - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/GPT-2"
    },
    {
        "title": "Geometric algebra - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Geometric_algebra"
    },
    {
        "title": "Glossary of artificial intelligence - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence"
    },
    {
        "title": "Glossary of computer graphics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glossary_of_computer_graphics#3d_scene"
    },
    {
        "title": "Gödel, Escher, Bach - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
    },
    {
        "title": "Help:Category - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Help:Category"
    },
    {
        "title": "Hidden Markov model - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hidden_Markov_model"
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
        "title": "Infimum and supremum - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    },
    {
        "title": "Information extraction - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Information_extraction"
    },
    {
        "title": "Information retrieval - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Information_retrieval"
    },
    {
        "title": "Information system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Information_system"
    },
    {
        "title": "Intelligent agent - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Intelligent_agent"
    },
    {
        "title": "Internet Archive - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Internet_Archive"
    },
    {
        "title": "Inverse problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Inverse_problem"
    },
    {
        "title": "Involution (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Involution_(mathematics)"
    },
    {
        "title": "Isosurface - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Isosurface"
    },
    {
        "title": "Jacobi eigenvalue algorithm - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Jacobi_eigenvalue_algorithm"
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
        "title": "Knowledge representation and reasoning - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning"
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
        "title": "LU decomposition - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/LU_decomposition"
    },
    {
        "title": "Laplacian matrix - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Laplacian_matrix"
    },
    {
        "title": "Lasso (statistics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lasso_(statistics)"
    },
    {
        "title": "Latent Dirichlet allocation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation"
    },
    {
        "title": "Latent semantic analysis - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Latent_semantic_analysis"
    },
    {
        "title": "Lebesgue covering dimension - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lebesgue_covering_dimension"
    },
    {
        "title": "Lemmatisation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lemmatisation"
    },
    {
        "title": "Level set - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Level_set"
    },
    {
        "title": "Level-set method - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Level-set_method"
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
        "title": "List of algorithms - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/List_of_algorithms"
    },
    {
        "title": "List of graphical methods - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/List_of_graphical_methods"
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
        "url": "https://en.m.wikipedia.org/w/index.php?title=Lists_of_mathematics_topics&mobileaction=toggle_view_mobile"
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
        "title": "Marching cubes - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Marching_cubes"
    },
    {
        "title": "Markov chain Monte Carlo - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo"
    },
    {
        "title": "Mask (computing) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mask_(computing)"
    },
    {
        "title": "Mathematical chess problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mathematical_chess_problem"
    },
    {
        "title": "Mathematical economics - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Mathematical_economics"
    },
    {
        "title": "Mathematical finance - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Mathematical_finance"
    },
    {
        "title": "Maximal and minimal elements - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maximal_and_minimal_elements"
    },
    {
        "title": "Metaballs - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Metaballs"
    },
    {
        "title": "Monkey and banana problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Monkey_and_banana_problem"
    },
    {
        "title": "Monte Carlo integration - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Monte_Carlo_integration"
    },
    {
        "title": "Monte Carlo method - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Monte_Carlo_method"
    },
    {
        "title": "Morphism - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Morphism"
    },
    {
        "title": "Multi-agent planning - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Multi-agent_planning"
    },
    {
        "title": "Multi-agent system - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Multi-agent_system"
    },
    {
        "title": "Multidisciplinary design optimization - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Multidisciplinary_design_optimization"
    },
    {
        "title": "Multiset - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Multiset"
    },
    {
        "title": "NaN - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/NaN"
    },
    {
        "title": "Named entity - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Named_entity"
    },
    {
        "title": "Natural language generation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Natural_language_generation"
    },
    {
        "title": "Natural language processing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Natural-language_processing"
    },
    {
        "title": "Natural-language understanding - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Natural-language_understanding"
    },
    {
        "title": "Natural-language user interface - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Natural-language_user_interface"
    },
    {
        "title": "Neighborhood illust1 - Neighbourhood (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)#/media/File:Neighborhood_illust1.svg"
    },
    {
        "title": "Neighbourhood (mathematics) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neighborhood_(mathematics)"
    },
    {
        "title": "Newton's method - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Newton%27s_method"
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
        "url": "https://en.m.wikipedia.org/wiki/Numerical_linear_algebra"
    },
    {
        "title": "Numerical weather prediction - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Numerical_weather_prediction"
    },
    {
        "title": "One-way compression function - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/One-way_compression_function#Davies%E2%80%93Meyer"
    },
    {
        "title": "Onion routing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Onion_routing"
    },
    {
        "title": "Ontology (information science) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ontology_(information_science)"
    },
    {
        "title": "Operations research - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Operations_research"
    },
    {
        "title": "Optical character recognition - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Optical_character_recognition"
    },
    {
        "title": "PageRank - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/PageRank"
    },
    {
        "title": "Palindrome - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Palindrome#Computation_theory"
    },
    {
        "title": "Parallel computing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Parallel_computing"
    },
    {
        "title": "Parsing - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Parsing"
    },
    {
        "title": "Pathfinding - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pathfinding"
    },
    {
        "title": "Pattern recognition - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pattern_recognition"
    },
    {
        "title": "Peer-to-peer - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Peer-to-peer"
    },
    {
        "title": "Petri net - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Petri_net"
    },
    {
        "title": "Probabilistic context-free grammar - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Probabilistic_context-free_grammar"
    },
    {
        "title": "Procedural generation - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Procedural_generation"
    },
    {
        "title": "Pure mathematics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pure_mathematics"
    },
    {
        "title": "Question answering - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Question_answering"
    },
    {
        "title": "RSA (cryptosystem) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/RSA_(cryptosystem)"
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
        "title": "Runge–Kutta methods - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods"
    },
    {
        "title": "SHA-2 - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/SHA-2"
    },
    {
        "title": "Sample mean and covariance - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sample_mean_and_covariance"
    },
    {
        "title": "Scripting language - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scripting_programming_language"
    },
    {
        "title": "Search engine - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Search_engine"
    },
    {
        "title": "Search engine optimization - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Search_engine_optimization"
    },
    {
        "title": "Semantic Web - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Semantic_Web"
    },
    {
        "title": "Sentiment analysis - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sentiment_analysis"
    },
    {
        "title": "Seq2seq - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Seq2seq"
    },
    {
        "title": "Social media mining - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Social_media_mining"
    },
    {
        "title": "Stable Diffusion - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stable_Diffusion"
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
        "title": "Statistical physics - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Statistical_physics"
    },
    {
        "title": "Stemming - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stemming"
    },
    {
        "title": "String (computer science) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/String_(computer_science)"
    },
    {
        "title": "Subnetwork - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Subnet_mask"
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
        "title": "Supply chain management - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Supply_chain_management"
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
        "title": "Systems theory - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Systems_theory"
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
        "title": "Text mining - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Text_mining"
    },
    {
        "title": "Text-to-image model - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Text-to-image_model"
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
        "title": "Topic model - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Topic_model"
    },
    {
        "title": "Topology - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Topology"
    },
    {
        "title": "Tor (network) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tor_(network)"
    },
    {
        "title": "Tournament (graph theory) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tournament_(graph_theory)"
    },
    {
        "title": "Toy problem - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Toy_problem"
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
    },
    {
        "title": "Wayback Machine - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wayback_Machine"
    },
    {
        "title": "Weak supervision - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Weak_supervision#Semi-supervised_learning"
    },
    {
        "title": "Webgraph - Wikipedia",
        "url": "https://en.m.wikipedia.org/wiki/Webgraph"
    },
    {
        "title": "Word (computer architecture) - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Word_(computer_architecture)"
    },
    {
        "title": "WordNet - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/WordNet"
    },
    {
        "title": "YAML - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/YAML"
    },
    {
        "title": "n-gram - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/N-gram"
    },
    {
        "title": "tf–idf - Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Tf%E2%80%93idf"
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
